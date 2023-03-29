import { useEffect } from "react";

import Play from "../components/Play";

export default function PlayPage(props: any) {
  useEffect(() => {
    props.handleActivePageChange("PlayPage");
  }, []);

  return <Play />;
}
