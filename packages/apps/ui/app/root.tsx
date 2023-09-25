import * as React from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import { withEmotionCache } from "@emotion/react";
import {
  Container,
  Typography,
  unstable_useEnhancedEffect as useEnhancedEffect,
} from "@mui/material";

import theme from "./theme";
import ClientStyleContext from "./client-style-context";
import Layout from "./layout";

interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

const Document = withEmotionCache(
  ({ children, title }: DocumentProps, emotionCache) => {
    const clientStyleData = React.useContext(ClientStyleContext);

    // Only executed on client
    useEnhancedEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      emotionCache.sheet.flush();
      // reset cache to reapply global styles
      clientStyleData.reset();
    }, []);

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          {title ? <title>{title}</title> : null}
          <Meta />
          <Links />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <meta
            name="emotion-insertion-point"
            content="emotion-insertion-point"
          />
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
);

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function extractErrorDetails(error: unknown) {
  if (isRouteErrorResponse(error)) {
    return { status: error.status, message: error.data.message };
  }
  return error instanceof Error
    ? { status: 500, message: error.message }
    : { status: 500, message: "Unknown error" };
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  const errorDetails = extractErrorDetails(error);

  return (
    <Document>
      <Layout>
        <Container>
          <Typography variant="h4">An Error Occurred</Typography>
          <Typography variant="body1">Status: {errorDetails.status}</Typography>
          {errorDetails.message && (
            <Typography variant="body1">
              Message: {errorDetails.message}
            </Typography>
          )}
        </Container>
      </Layout>
    </Document>
  );
}
