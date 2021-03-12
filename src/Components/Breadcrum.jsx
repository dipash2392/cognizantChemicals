import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function Naviagate() {
  return (
    <>
      <span>&gt;</span>
    </>
  );
}

function CustomSeparator() {
  return (
    <div className="">
      <Breadcrumbs separator={<Naviagate />} aria-label="breadcrumb">
        <Link color="inherit" href="/">
          MDM
        </Link>
        <Link color="inherit" href="/getting-started/installation/">
          Core
        </Link>
        <span className="text-primary font-weight-bold">Product</span>
      </Breadcrumbs>
    </div>
  );
}
export default CustomSeparator;
