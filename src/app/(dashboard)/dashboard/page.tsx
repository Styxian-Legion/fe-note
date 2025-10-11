import StatsOverview from "@/components/dashboard/StatsOverview"
import ActivityOverview from "@/components/dashboard/ActivityOverview";

import { FaStickyNote, FaUsers } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

export default function Page() {
    return (
        <div className="w-full flex flex-col gap-4">
            <StatsOverview>
                <StatsOverview.Item
                    icon={<FaUsers className="w-6 h-6" />}
                    name="Total User"
                    value="20000"
                    href="/users"
                />
                <StatsOverview.Item
                    icon={<MdCategory className="w-6 h-6" />}
                    name="Total Category"
                    value="20000"
                    href="/category"
                />
                <StatsOverview.Item
                    icon={<FaStickyNote className="w-6 h-6" />}
                    name="Total Note"
                    value="20000"
                    href="/notes"
                />
            </StatsOverview>
            <ActivityOverview />
        </div>
    )
}