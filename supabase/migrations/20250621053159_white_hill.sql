/*
  # Fix Contact Submissions RLS Policy

  1. Security Updates
    - Drop existing INSERT policy that may be misconfigured
    - Create new INSERT policy that properly allows anonymous users to submit contact forms
    - Ensure the policy allows all anonymous users to insert contact submissions
    - Keep existing SELECT policies for authenticated users and service role

  2. Changes
    - Remove problematic INSERT policy
    - Add new INSERT policy with proper anonymous access
*/

-- Drop the existing INSERT policy that might be misconfigured
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON contact_submissions;

-- Create a new INSERT policy that allows anonymous users to submit contact forms
CREATE POLICY "Allow anonymous contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Ensure the table has RLS enabled (should already be enabled)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;