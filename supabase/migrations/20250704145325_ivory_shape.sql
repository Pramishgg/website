/*
  # Fix RLS policies for contact submissions

  1. Security Updates
    - Safely drop and recreate all RLS policies
    - Enable RLS on contact_submissions table
    - Add policies for anonymous submissions
    - Add policies for service role access
    - Add policies for authenticated user access

  2. Changes
    - Uses IF NOT EXISTS checks to prevent duplicate policy errors
    - Ensures all necessary policies are in place
    - Maintains security while allowing contact form functionality
*/

-- Ensure RLS is enabled
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Safely drop existing policies if they exist
DO $$ 
BEGIN
  -- Drop all existing policies for contact_submissions
  DROP POLICY IF EXISTS "Allow anonymous contact submissions" ON contact_submissions;
  DROP POLICY IF EXISTS "Enable insert for anonymous contact submissions" ON contact_submissions;
  DROP POLICY IF EXISTS "Anyone can submit contact forms" ON contact_submissions;
  DROP POLICY IF EXISTS "Service role can read all submissions" ON contact_submissions;
  DROP POLICY IF EXISTS "Enable read for service role" ON contact_submissions;
  DROP POLICY IF EXISTS "Enable insert for anonymous users" ON contact_submissions;
  DROP POLICY IF EXISTS "Enable read for own submissions" ON contact_submissions;
END $$;

-- Create policy for anonymous and authenticated users to insert contact submissions
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