import { Typography } from "@material-tailwind/react";
export function AboutCard(props) {
    return (
        <div className="text-white">
            <Typography variant="h6" className="font-ubuntu-mono">
                <span className="text-white/70 pr-3">
                    {props.category}
                </span> 
                {props.value}
            </Typography>
        </div>
    )
  }