import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-yellow-50 via-orange-50 to-white px-4">
      <Card className="w-full max-w-md text-center shadow-xl border border-orange-200 rounded-2xl">
        <CardContent className="pt-8 pb-6">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="h-10 w-10 text-orange-500 animate-pulse" />
          </div>

          <h1 className="text-3xl font-extrabold text-orange-700 mb-2">
            404 – Thali Missing!
          </h1>

          <p className="text-sm text-gray-600 mb-3">
            Oops! You seem to have ordered a dish that’s not on the menu.
            <br />
            <span className="text-xs text-orange-700 font-medium">
              (તમે ખોટી વાનગી શોધી રહ્યા છો! 😅)
            </span>
          </p>
{/* 
          <Link to="/" className="inline-block mt-4">
            <button className="px-5 py-2 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow transition-all duration-200">
              🍽️ Back to Menu
            </button>
          </Link> */}

          <p className="mt-5 text-[11px] text-gray-400 italic">
            Annraaj Catering Services – Serving Love in Every Bite 💛
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
