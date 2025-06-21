/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required) - Full name of the person submitting
      - `email` (text, required) - Email address for contact
      - `subject` (text, required) - Subject of the message
      - `message` (text, required) - The actual message content
      - `created_at` (timestamp) - When the submission was created
      - `updated_at` (timestamp) - When the submission was last updated

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for authenticated users to insert their own submissions
    - Add policy for service role to read all submissions (for admin access)

  3. Indexes
    - Add index on email for faster lookups
    - Add index on created_at for chronological sorting
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contact submissions
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policy for service role to read all submissions (for admin access)
CREATE POLICY "Service role can read all submissions"
  ON contact_submissions
  FOR SELECT
  TO service_role
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();