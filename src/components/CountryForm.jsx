import { forwardRef } from "react";
import { useSelect } from "../hooks/main";
import Select from "react-select";

const CountryForm = forwardRef((props, ref) => {
  const { countries, handlePick, picks } = props;

  const options = countries.map((country) => {
    return {
      value: country,
      label: country,
    };
  });

  const fromSelect = useSelect(options, picks.from, handlePick.from);

  const toSelect = useSelect(options, picks.to, handlePick.to);

  return (
    <form>
      <section>
        <label>
          <span>Your Country of Residence:</span>
          <Select {...fromSelect} required="true" />
        </label>
      </section>
      <section>
        <label>
          <span>You are moving to:</span>
          <Select {...toSelect} required="true" ref={ref} />
        </label>
      </section>
      <section>
        <button type="submit">Let&apos;s go!</button>
      </section>
    </form>
  );
});

CountryForm.displayName = "CountryForm";

export default CountryForm;
