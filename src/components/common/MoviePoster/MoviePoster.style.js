import { Dimensions, StyleSheet } from 'react-native';
// Get screen dimensions
const { width, height } = Dimensions.get('window');
// How many posters we want to have in each row and column
const cols = 3, rows = 3;
export default {
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 100) / rows - 10,
    width: (width - 10) / cols - 10,
  },
  imageContainer: {
    flex: 1,                          // take up all available space
  },
  image: {
    borderRadius: 10,                 // rounded corners
    ...StyleSheet.absoluteFillObject, // fill up all space in a container
  },
  title: {
    fontSize: 14,
    marginTop: 4,
  },
  IMDB: {
    color: '#BBBBBB',
    fontSize: 12,
    lineHeight: 14,
  }
}