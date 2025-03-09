import * as React from "react";
import { Switch } from "@base-ui-components/react/switch";

export default function CheckBox() {
  return (
    <div>
      <Switch.Root
        defaultChecked
        className="relative flex h-6 w-12 rounded-full bg-gray-300 transition-colors duration-300 data-[checked]:bg-blue-500"
      >
        <Switch.Thumb className="h-5 w-5 bg-white rounded-full shadow-md transform transition-transform duration-300 data-[checked]:translate-x-6" />
      </Switch.Root>

     
    </div>
  );
}


