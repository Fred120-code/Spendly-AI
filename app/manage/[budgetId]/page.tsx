import React, { useState } from 'react'

const page = ({params}: {params: Promise<{budgetId: string}>}) => {
  
  const [budgetId, setBudgetID] = useState<string>("");
   
  return (
    <div>
      
    </div>
  )
}

export default page