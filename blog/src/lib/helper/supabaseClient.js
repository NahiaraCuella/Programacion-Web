import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://sscicpyqljhrgftjrkfk.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzY2ljcHlxbGpocmdmdGpya2ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2NzkxOTQsImV4cCI6MjA0MjI1NTE5NH0.EyZOsb2rxSww6D1FvYmwvbCWwTMLkJiASz30KR1XMsE"
);
export default supabase;
