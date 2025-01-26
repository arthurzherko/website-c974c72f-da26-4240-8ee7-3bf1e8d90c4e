import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Coffee, Sparkles } from "lucide-react"

interface AIInsightCardProps {
  insight: string
  confidence: number
}

export function AIInsightCard({ insight, confidence }: AIInsightCardProps) {
  return (
    <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="rounded-full bg-primary/10 p-2">
          <Brain className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="flex items-center gap-2">
          AI Insight
          <Sparkles className="h-4 w-4 text-yellow-500" />
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-start gap-4">
          <Coffee className="mt-1 h-5 w-5 text-muted-foreground" />
          <p className="text-sm leading-relaxed text-muted-foreground">{insight}</p>
        </div>
        <div className="text-xs text-muted-foreground">
          Confidence Score: {confidence}%
        </div>
      </CardContent>
    </Card>
  )
}