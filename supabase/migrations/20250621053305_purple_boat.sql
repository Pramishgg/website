/*
  # Fix Contact Submissions RLS Policy

  1. Security Updates
    - Drop existing INSERT policy that may have incorrect configuration
    - Create new INSERT policy with proper boolean expression for anonymous submissions
    - Ensure both anonymous and authenticated users can submit contact forms

  2. Policy Details
    - Allow INSERT operations for both 'anon' and 'authenticated' roles
    - Use proper boolean true expression instead of string
*/

-- Drop the existing policy if it exists
DROP POLICY IF EXISTS "Allow anonymous contact submissions" ON contact_submissions;

-- Create a new INSERT policy with proper configuration
CREATE POLICY "Allow anonymous contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);