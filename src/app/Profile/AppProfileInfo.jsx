// eslint-disable-next-line no-unused-vars
import React from "react";

const infoInProfile = [
    {
        infokey: 1,
        infoProperty: "username",
        infoValue: "@renoaderelyann",
    },
    {
        infokey: 2,
        infoProperty: "tanggal lahir",
        infoValue: "27 Mei 2005",
    },
    {
        infokey: 3,
        infoProperty: "no HP",
        infoValue: "+628123456789",
    },
];

// eslint-disable-next-line react/prop-types
function ListProfileInfo({ property, value }) {
    return (
        <>
            <div className="flex justify-between text-stone-600 text-sm border-b border-stone-300 px-2 py-2">
                <p className=" grid-cols-1">{property} </p>
                <p className=" font-semibold">{value}</p>
            </div>
        </>
    );
}

function AppProfileInfo() {
    return (
        <>
            <div className="grid gap-1">
                {infoInProfile.map((ingpo) => (
                    <ListProfileInfo
                        key={ingpo.key}
                        property={ingpo.infoProperty}
                        value={ingpo.infoValue}
                    />
                ))}
            </div>
        </>
    );
}

export default AppProfileInfo;
