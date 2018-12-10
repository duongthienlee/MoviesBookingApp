export default {
    container: {
        flex: 1,
        display: "flex",
    },
    // top user info
    img: {
        height: 100,
        width: 100,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#ffffff',
        marginTop: 20,
    },
    username: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    // list booking code
    listHeaderView: {
        marginTop: 10,
        marginBottom: 20,
    },

    listHeader: {
        textAlign: "center",
        fontSize: 18,
        color: 'black',
        fontWeight: "bold"
    },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: 'rgba(48,61,82,1)',
        borderRadius: 10,
        margin: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    button: {
        color: '#FFFFFF',
        fontSize: 10,
    },
    // bottom button
    logoutButtonView: {
        marginTop: "auto", textAlign: "center", width: "100%", padding: 20,
    },
    buttonStyle: {
        borderColor: "rgba(38,41,43,1)",
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        width: "100%",
    },
    flexAlignInRowStyle: {
        display: "flex",
        flexDirection: 'row'
    },
    flexVerticalHorizontal: {
        flex: 1,
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        alignItems: "center"
    }
};