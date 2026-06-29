export async function submitToGoogleSheets(data: {
    name: string
    email: string
    phone: string
    program: string
    message: string
  }) {
    const GOOGLE_APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || ""
  
    if (!GOOGLE_APPS_SCRIPT_URL || GOOGLE_APPS_SCRIPT_URL === "YOUR_APPS_SCRIPT_URL_HERE") {
      console.error("Google Sheets URL not configured")
      return { success: false, error: "Configuration missing" }
    }
  
    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
  
      // no-cors mode doesn't allow reading response, assume success
      return { success: true }
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error)
      return { success: false, error }
    }
  }
  