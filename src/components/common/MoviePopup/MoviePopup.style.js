import { StyleSheet } from 'react-native';
export default {
  // Main container
  container: {
    ...StyleSheet.absoluteFillObject,   // fill up all screen
    justifyContent: 'flex-end',         // align popup at the bottom
    backgroundColor: 'transparent',     // transparent background
  },
  // Semi-transparent background below popup
  backdrop: {
    ...StyleSheet.absoluteFillObject,   // fill up all screen
    backgroundColor: 'black',
  },
  // Popup
  modal: {
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    margin: 20,
    marginBottom: 0,
  },
  // Movie container
  movieContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    maxWidth: 500,
    marginRight: 10,
  },
  image: {
    borderRadius: 10,                   // rounded corners
    ...StyleSheet.absoluteFillObject,   // fill up all space in a container
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap'       // allow multiple rows
  },
  movieInfo: {
    marginTop: 40,
    alignItems: "center",
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center', // center vertically
  },
  title: {
    fontSize: 20,
  },
  genre: {
    color: '#BBBBBB',
    fontSize: 14,
  },
  sectionHeader: {

    color: '#AAAAAA',
  },
  // Footer
  footer: {
    padding: 20,
  },
  buttonContainer: {
    backgroundColor: 'rgba(38,41,43,1)',
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    color: '#FFFFFF',
    fontSize: 18,
  }
}