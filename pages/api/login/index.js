// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { db } from "@/services/firebase"
import { child, get, ref, set } from "firebase/database"
import { v4 } from "uuid"

export default function handler(req, res) {

  if (req.method == 'GET') {

    get(child(ref(db), 'login')).then(snapshot=>{

      const retorno = []

      snapshot.forEach(item=>{
        retorno.push(item.val())
      })
      
      res.status(200).json(retorno)
    })

  } else if (req.method == 'POST') {

    const uuid = v4()
    const dados = req.body
    dados.id = uuid
  
    set(ref(db, 'login/' + uuid), dados)

  }

}
