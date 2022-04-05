import * as tsx from "vue-tsx-support";
import { PropType } from "vue";

export default tsx.component({
  name: "UnusedProp",
  props: {
    unusedProperty: {
      // <<< *** expected warning here ***
      type: String as PropType<string>,
      required: true,
    },
  },
  render() {
    return <h2>I have unused prop :(</h2>;
  },
});
