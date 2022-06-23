import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {isLoad, logOut} from '../../store/actions/authActions';
import {fetchComents, fetchPosts} from '../../store/actions/programsActions';
import {IPosts} from '../../store/reducers/programsReducer';
import {calcHeight, calcWidth} from '../../utils/dimensions';

export const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const {posts, coments, errorMesage} = useSelector(
    (state: any) => state.programsReducer,
  );
  const {load} = useSelector((state: any) => state.authReducer);
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(isLoad(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (errorMesage) {
      Alert.alert(errorMesage);
      show();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorMesage]);

  const showComment = (item: IPosts) => {
    dispatch(fetchComents(item));
    show();
  };
  const renderItem = ({item}: any) => {
    return (
      <View style={styles.card}>
        <TouchableOpacity onPress={() => showComment(item)}>
          <Text>{item.title}</Text>
          <Text>{item.body}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderComments = ({item}: any) => {
    return (
      <View style={styles.commentCard} onStartShouldSetResponder={() => true}>
        <Text>name: {item.name}</Text>
        <Text>body: {item.body}</Text>
      </View>
    );
  };

  const show = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      {load ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <>
          <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            style={styles.modal}>
            <TouchableOpacity onPress={show} style={styles.closeModal}>
              <TouchableWithoutFeedback>
                <View style={styles.modalCard}>
                  <FlatList
                    data={coments}
                    renderItem={renderComments}
                    keyExtractor={item => item.id}
                  />
                </View>
              </TouchableWithoutFeedback>
            </TouchableOpacity>
          </Modal>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.buttonLogout}
              onPress={() => {
                dispatch(logOut());
              }}>
              <Text>log out</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={posts}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: calcWidth(330),
    height: calcHeight(120),
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 5,
    padding: 4,
  },
  headerContainer: {
    width: 400,
    height: 20,
  },
  buttonLogout: {
    position: 'absolute',
    top: 0,
    right: calcWidth(16),
    marginBottom: 10,
  },
  modal: {
    width: calcWidth(350),
    height: calcHeight(180),
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCard: {
    width: calcWidth(330),
    height: calcHeight(380),
    backgroundColor: 'grey',
  },
  commentCard: {padding: calcWidth(10)},
});
