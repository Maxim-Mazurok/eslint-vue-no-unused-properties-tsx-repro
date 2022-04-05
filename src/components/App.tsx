import * as tsx from "vue-tsx-support";
import UnusedProp from "./UnusedProp";

export default tsx.component({
  name: "App",
  render() {
    return <UnusedProp unusedProperty="doesn't matter" />;
  },
});
