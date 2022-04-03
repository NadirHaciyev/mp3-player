import secondsToTime from "../utils";
import { Range, getTrackBackground } from "react-range";
import { useAudio } from "react-use";


function CustomRange({ step, value, min, max, onChange, controls }) {
  

  return (
    <Range
      values={[value]}
      step={step}
      min={min}
      max={max}
      onChange={values => onChange(values[0])
      }
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: "14px",
            display: "flex",
            width: "100%",
            cursor: "default"
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: "4px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values: [value],
                colors: ["#1db954", "#535353"],
                min: min,
                max: max
              }),
              alignSelf: "center"
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          className="range-thumb"
          {...props}
          style={{
            ...props.style,
            height: "12px",
            width: "12px",
            borderRadius: "50%",
            backgroundColor: "#FFF",
            display: "flex",
            opacity: `${isDragged ? 1 : 0}`,
            justifyContent: "center",
            alignItems: "center",
            cursor: "default",
            outline: "none"
          }}
        />
      )}
    />
  );
}

export default CustomRange;
