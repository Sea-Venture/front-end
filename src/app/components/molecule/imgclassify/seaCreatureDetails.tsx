import React from "react";
import Typography from '../../atom/imgclassify/typography'

const SeaCreatureDetails = ({ seaCreatureName, description }: { seaCreatureName: string | null; description: string | null }) => {
  return (
    <div className="mt-6 p-4 w-full border border-gray-300 rounded-lg">
      {seaCreatureName && <Typography text={seaCreatureName} className="text-2xl font-semibold" />}
      {description && <Typography text={description} className="text-lg mt-2" />}
    </div>
  );
};

export default SeaCreatureDetails;
