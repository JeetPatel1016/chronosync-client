import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function PageNotFound() {
  const error = useRouteError();
  let errorMsg: string;
  if (isRouteErrorResponse(error)) {
    errorMsg = error.data || error.statusText;
  } else if (error instanceof Error) {
    errorMsg = error.message;
  } else if (typeof error === "string") {
    errorMsg = error;
  } else {
    errorMsg = "Unknown error";
  }

  return (
    <div>
      <h1>Page not found</h1>
      <p>{errorMsg}</p>
    </div>
  );
}
