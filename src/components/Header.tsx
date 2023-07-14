import { IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { BiMenu, BiSearch, BiUser } from "react-icons/bi";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="h-14 shadow-md flex items-center pl-4 pr-4 justify-between bg-white">
      <div className="md:hidden">
        <IconButton
          size="sm"
          aria-label=""
          icon={<BiMenu size={20} />}
          colorScheme="teal"
        />
      </div>
      <div className="hidden md:block">logo</div>
      <div className="flex items-center">
        <div className="hidden md:block">
          <button className="flex items-center pl-4 pr-4 shadow-md w-96 h-10 gap-4">
            <BiSearch className="text-zinc-400" />
            <Text className="text-zinc-400 select-none">Search...</Text>
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <IconButton
          size="sm"
          aria-label="sss"
          icon={<BiUser size={20} />}
          colorScheme="teal"
        />
      </div>
    </div>
  );
}
