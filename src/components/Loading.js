import { Spinner } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <div className='flex justify-center items-center py-4'>
      <Spinner /> Please Wait ......
    </div>
  );
};

export default Loading;
