/*
  # Update contact submissions policies

  1. Security Updates
    - Drop existing policies safely
    - Enable RLS on contact_submissions table
    - Add policy for anonymous contact form submissions
    - Add policy for service role to read all submissions
    - Add policy for authenticated users to read submissions

  2. Changes
    - Ensures clean policy state by dropping existing ones
    - Creates comprehensive access policies for different user types
    - Maintains security while allowing necessary operations
*/

-- Safely drop existing policies if they exist
DO $$ 
BEGIN
  -- Drop policies if they exist
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contact_submissions' 
    AND policyname = 'Anyone can submit contact forms'
  ) THEN
    DROP POLICY "Anyone can submit contact forms" ON contact_submissions;
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contact_submissions' 
    AND policyname = 'Service role can read all submissions'
  ) THEN
    DROP POLICY "Service role can read all submissions" ON contact_submissions;
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contact_submissions' 
    AND policyname = 'Enable insert for anonymous users'
  ) THEN
    DROP POLICY "Enable insert for anonymous users" ON contact_submissions;
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contact_submissions' 
    AND policyname = 'Enable read for service role'
  ) THEN
    DROP POLICY "Enable read for service role" ON contact_submissions;
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contact_submissions' 
    AND policyname = 'Enable read for own submissions'
  ) THEN
    DROP POLICY "Enable read for own submissions" ON contact_submissions;
  END IF;
END $$;

-- Ensure RLS is enabled
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for anonymous contact submissions
CREATE POLICY "Allow anonymous contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policy for service role to read all submissions
CREATE POLICY "Enable read for service role"
  ON contact_submissions
  FOR SELECT
  TO service_role
  USING (true);

-- Create policy for authenticated users to read submissions
CREATE POLICY "Enable read for own submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create additional insert policy for authenticated users (duplicate for safety)
CREATE POLICY "Enable insert for anonymous contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);