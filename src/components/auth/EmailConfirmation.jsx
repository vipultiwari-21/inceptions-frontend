import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function EmailConfirmation() {
  const [params] = useSearchParams();
  const jwtToken = params.get("jwtToken");
  const [result, setResult] = useState("");

  const handleVerification = async () => {
    console.log(jwtToken);
    try {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_ENDPOINT
        }auth/verify-email?jwtToken=${jwtToken}`
      );
      setResult(data.message);
    } catch (err) {
      setResult(err.response.data.error);
    }
  };

  return (
    <div>
      <button
        className="btn btn-outline btn-warning"
        onClick={handleVerification}
      >
        Verify Email
      </button>
      {result ? <h1>{result}</h1> : null}
    </div>
  );
}

export default EmailConfirmation;
