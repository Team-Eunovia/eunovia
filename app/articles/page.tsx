"use client";

import { posts } from "@/lib/constants";
import { ko, Faker } from "@faker-js/faker";
import { Image } from "@heroui/react";
import dayjs from "dayjs";
import Link from "next/link";

const faker = new Faker({
  locale: [ko],
});

export default function Page() {
  const postsWithUser = posts.map((post) => ({
    ...post,
    author: {
      author_profile_image: faker.image.avatar(),
      author_name: faker.person.fullName(),
    },
  }));

  return (
    <div className="flex-1 relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y divide-default-800/15 md:border-t border-default-800/15 sm:divide-x border-l">
        {postsWithUser.map((post) => (
          <Link
            key={post.id}
            className="px-4 sm:px-6 py-6 space-y-6 last:border-r last:border-b last:border-default-800/15 hover:bg-default-700/5"
            href={`/posts/${post.id}`}
          >
            <div className="space-y-2 flex-1 w-full">
              <p className="text-2xl font-semibold truncate w-full">
                {post.title}
              </p>
              <p className="text-sm truncate break-words whitespace-normal line-clamp-2 text-default-600">
                {post.content}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-2">
                <Image
                  height={32}
                  radius="sm"
                  src={post.author.author_profile_image}
                  width={32}
                />
                <div className="text-xs text-default-900 space-y-0.5">
                  <p>{post.author.author_name}</p>
                  <p>{dayjs(post.created_at).format("YYYY년 M월 D일")}</p>
                </div>
              </div>
              <Image
                className="aspect-video object-cover"
                radius="sm"
                src={post.thumbnail_image}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
