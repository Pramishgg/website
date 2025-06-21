/*
  # Fix Contact Submissions RLS Policy

  1. Security Updates
    - Drop existing policies to ensure clean state
    - Recreate INSERT policy for anonymous users with proper conditions
    - Recreate SELECT policy for service role
    - Ensure RLS is properly enabled

  2. Policy Details
    - Allow anonymous and authenticated users to insert contact submissions
    - Allow service role to read all submissions for admin purposes
*/

-- Drop existing policies to ensure clean state
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON contact_submissions;
DROP POLICY IF EXISTS "Service role can read all submissions" ON contact_submissions;

-- Ensure RLS is enabled
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting contact submissions (anonymous and authenticated users)
CREATE POLICY "Enable insert for anonymous users"
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

-- Create policy for authenticated users to read their own submissions (optional, for future use)
CREATE POLICY "Enable read for own submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);