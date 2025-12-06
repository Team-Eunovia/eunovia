create function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
    if new.raw_app_meta_data is not null then
        if new.raw_app_meta_data ? 'provider' AND new.raw_app_meta_data ->> 'provider' = 'github' then
            insert into public.profile (id, user_name, avatar_url, email)
            values (new.id, 'user_' || substr(md5(random()::text), 1, 10), new.raw_user_meta_data ->> 'avatar_url', new.raw_user_meta_data ->> 'email');
        end if;

    end if;
    return new;
end;
$$;

create trigger user_to_profile_trigger
after insert on auth.users
for each row execute function public.handle_new_user();


-- Remove Trigger & Function

-- 1️⃣ 트리거 삭제
drop trigger if exists user_to_profile_trigger on auth.users;

-- 2️⃣ 함수 삭제
drop function if exists public.handle_new_user();