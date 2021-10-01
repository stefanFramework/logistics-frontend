import React from "react";
import styled from "styled-components";
import { BanIcon, CheckIcon } from "@heroicons/react/solid";
const STATUS_ENABLED = 1;
function StatusIcon(props) {
  const status = props.status;

  if (status == STATUS_ENABLED) {
    return <CheckIcon className="h-5 w-5text-green-500 item" />;
  }
  return <BanIcon className="h-3 w-3 text-red-500 item" />;
}
export default StatusIcon;
