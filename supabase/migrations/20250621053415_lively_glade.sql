/*
  # Fix Contact Submissions RLS Policy

  1. Security Updates
    - Drop existing INSERT policy that's not working correctly
    - Create new INSERT policy that properly allows anonymous submissions
    - Ensure the policy allows both anonymous and authenticated users to submit contact forms

  2. Changes
    - Remove restrictive INSERT policy
    - Add permissive INSERT policy for contact form submissions
*/

-- Drop the existing INSERT policy
DROP POLICY IF EXISTS "Allow anonymous contact submissions" ON contact_submissions;

-- Create a new INSERT policy that allows anonymous users to submit contact forms
CREATE POLICY "Enable insert for anonymous contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Ensure the policy allows reading for authenticated users (keep existing SELECT policies)
-- The existing SELECT policies should remain as they are