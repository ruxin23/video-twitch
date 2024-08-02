"use client";

import { User } from "@prisma/client";
import { UserItemSkeleton } from "./user-item";
import { useSidebar } from "@/store/use-sidebar";
import UserItem from "./user-item";

interface RecommendedProps {
    data: User[];
}
const Recommended = ({ data }: RecommendedProps) => {
    const { collapsed } = useSidebar();

    const showLabel = !collapsed && data.length > 0;
    return (
        <div>
            {showLabel && (
                <div className="pl-6 mb-4">
                    <p className="text-sm text-muted-foreground">
                        Recommended
                    </p>
                </div>
            )}
            <ul className="space-y-2 px-2">
                {data.map((user) => (
                    <UserItem
                        key={user.id}
                        username={user.userName}
                        imageUrl={user.imageUrl}
                        isLive={true}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Recommended;

export const RecommendedSkeleton = () => {
    return (
        <ul className="px-2">
            {[...Array(3)].map((_, i) => (
                <UserItemSkeleton key={i} />
            ))}
        </ul>
    );
};

