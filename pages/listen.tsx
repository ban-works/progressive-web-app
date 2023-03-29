import { useEffect } from "react";

import Listen from "../components/Listen";

export default function ListenPage(props: any) {
  useEffect(() => {
    props.handleActivePageChange("ListenPage");
  }, []);

  return <Listen />;
}
