export default {
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    borderWidth: 0,
    marginTop: -20,
    zIndex: 100,
  },
  headerBannerContainer: { paddingLeft: 20, paddingBottom: 20 },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#ffffff',
    marginTop: 20,
    marginBottom: 20,
  },
  itemWrappers: {
    marginBottom: 0.5, paddingTop: 10, paddingBottom: 10, paddingLeft: 0, paddingRight: 0,
    borderBottomWidth: 0.5, borderColor: 'rgb(225, 225, 225)'
  },
  itemContainer: {
    display: "flex", flexDirection: "row",
    paddingTop: 15, paddingBottom: 15, paddingLeft: 0, paddingRight: 0,
  },
  itemLabels: { fontSize: 18, color: 'black' },
  itemIcons: { paddingLeft: 20, paddingRight: 30, color: "black" }
};