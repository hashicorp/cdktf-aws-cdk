export const handler = async (state: { value: string }) => ({
  value: state.value.split("").reverse().join(""),
});
