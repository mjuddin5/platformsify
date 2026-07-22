import { supabase } from "../../lib/supabase";

export default async function handler(req, res) {
  try {
    const { error } = await supabase.auth.getSession();

    if (error) {
      throw error;
    }

    return res.status(200).json({
      success: true,
      message: "Platformsify connected to Supabase",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
