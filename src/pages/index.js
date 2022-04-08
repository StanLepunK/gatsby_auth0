/**
 *  INDEX / HOME for LOGIN or CREATE NEW ACCOUNT
 * v 0.1.0
 * 2019-2022
 * */
import React from "react"
import { Link } from "gatsby"

const GoToAccount = () => (
  <div>
    <p>Are you ready for a new world account ?</p>
    <Link to="/account/">If yes, go to your account or create new world</Link>
  </div>
)

export default GoToAccount;
