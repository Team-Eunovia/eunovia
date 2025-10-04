"use client";

import { Button, Image, Link } from "@heroui/react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col flex-1">
      <Image
        alt="not found image"
        height={200}
        src="/not-found.svg"
        width={200}
      />
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold">뭔가 잘못됐군요!</p>
        <Button as={Link} color="warning" href="/">
          <span>돌아가기</span>
        </Button>
      </div>
    </div>
  );
}
