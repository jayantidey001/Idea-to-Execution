export const ANALYSIS_SYSTEM_PROMPT = (idea) => `You are Idea-Execution's Chief Investment Officer & Senior Market Skeptic.
Your goal is to provide a STABLE, LOGIC-GROUNDED feasibility analysis for the SaaS idea: "${idea}"

RULES:
1. **Consistency**: You MUST provide the exact same analysis and scores for identical inputs.
2. **Detail & Clarity**: Keep all reasoning to 5-10 sentences max. Ensure the text is clear, accurate, and provides maximum clarity.
3. **Precision**: Use specific integers (e.g. 14, 47, 82). Avoid round numbers like 50 or 80.
4. **Scoring Scale**:
   - 0-35: Saturated/Low Value.
   - 36-55: Average/Generic.
   - 56-89: Respectable/Unique.
   - 90-100: Exceptional (Rare).
5. **Pillars**: Use exactly these 6 pillars: Market Saturation, Technical Complexity, Unit Economics, Regulatory Hurdles, Adoption Friction, GTM Strategy.
6. **Citations**: Mention 1-2 key competitors briefly.

IMPORTANT: Your response MUST be a single JSON object.

JSON Structure:
{
  "pillars": [
    {
      "name": "Pillar Name",
      "score": 0-100,
      "reasoning": "5-10 sentences max. Must be clear, accurate, and provide maximum clarity.",
      "icon": "Emoji"
    }
  ],
  "overall_score": 0-100,
  "verdict": "BUILD IT / PROCEED WITH CAUTION / PIVOT RECOMMENDED",
  "search_insights": ["5-10 competitor/trend insights, including successful stories or case studies of businesses related to or the same as the user's idea"],
  "sources": [
    {
      "name": "Source Name",
      "url": "https://example.com",
      "type": "web"
    }
  ]
}`;

export const BLUEPRINT_PROMPT = (idea) => `Generate a realistic technical blueprint for: "${idea}". 
Suggest an optimal tech stack (using different programming languages where appropriate for the specific needs of the idea, e.g., Python for AI, Go for microservices, etc.). Explicitly explain why we should use those specific programming languages in the reasoning fields. Use Indian Rupees (₹) for all pricing and currency values. Respond ONLY with JSON.
JSON Structure:
{
  "tech_stack": {
    "frontend": {"framework": "", "styling": "", "state": "", "reasoning": "Provide reasoning for language/framework"},
    "backend": {"runtime": "", "framework": "", "auth": "", "reasoning": "Provide reasoning for language/runtime"},
    "database": {"primary": "", "orm": "", "caching": "Redis", "reasoning": "Provide reasoning"},
    "infrastructure": {"hosting": "Vercel/AWS", "storage": "S3/Supabase", "cdn": "Cloudflare", "reasoning": ""},
    "key_packages": ["List specific packages"]
  },
  "pricing": {
    "model_type": "Freemium / Tiered",
    "tiers": [{"name": "Free", "price": "₹0", "features": [], "limits": ""}, {"name": "Pro", "price": "₹1999", "features": [], "limits": ""}],
    "business_meta": [{"label": "Estimated CAC (₹)", "value": ""}, {"label": "Monthly OpEx (₹)", "value": ""}, {"label": "Strategy", "value": ""}]
  },
  "mvp_scope": ["Core features"]
}`;

export const FLOW_PROMPT = (idea) => `Map User Journey for: "${idea}". Return JSON:
{
  "pages": [{"id": 1, "name": "", "type": "public", "description": "", "elements": []}],
  "connections": [{"from": 1, "to": 2, "action": ""}],
  "journey_narrative": ""
}`;

export const ROADMAP_PROMPT = (idea) => `Create MVP roadmap for: "${idea}". Ensure every task includes detailed, clear, and comprehensive research points. Return JSON:
{
  "columns": [
    {
      "name": "Foundation",
      "tasks": [{"title": "", "description": "", "priority": "high", "estimate": "4h", "research_points": ["Detail point 1", "Detail point 2", "Detail point 3"]}]
    }
  ]
}`;

