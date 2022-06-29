import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
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
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootStackParamList} from '../../navigation/root-navigation';
import {isLoad, logOut} from '../../store/actions/authActions';
import {
  failureComments,
  failurePosts,
  fetchComents,
  fetchPosts,
} from '../../store/actions/programsActions';
import {IRootReducer} from '../../store/reducers';
import {IPosts} from '../../store/reducers/programsReducer';
import {calcHeight, calcWidth} from '../../utils/dimensions';

type homeScreenProp = NativeStackScreenProps<RootStackParamList>;

export const HomeScreen = ({navigation}: homeScreenProp) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const {posts, coments, errorMesageComments, errorMesagePosts} = useSelector(
    (state: IRootReducer) => state.programsReducer,
  );
  const {load} = useSelector((state: IRootReducer) => state.authReducer);
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(isLoad(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (errorMesageComments) {
      Alert.alert(
        'error request',
        `${errorMesageComments}`,
        [
          {
            text: 'OK',
            onPress: () => dispatch(failureComments(null)),
          },
        ],
        {cancelable: false},
      );
      show();
    }
    if (errorMesagePosts) {
      Alert.alert(
        'error request',
        `${errorMesagePosts}`,
        [
          {text: 'Cancel', onPress: () => console.log('cancel')},
          {
            text: 'OK',
            onPress: () => {
              dispatch(fetchPosts());
              dispatch(failurePosts(null));
            },
          },
        ],
        {cancelable: false},
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorMesageComments, errorMesagePosts]);

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
    <SafeAreaView style={styles.container}>
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
                    keyExtractor={(item: any) => item.id}
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
                navigation.navigate('LoginScreen');
              }}>
              <Text>log out</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={posts}
            renderItem={renderItem}
            keyExtractor={(item: any) => item.id}
          />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#508cef80',
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
    height: 26,
  },
  buttonLogout: {
    position: 'absolute',
    top: 0,
    right: calcWidth(16),
    marginBottom: 10,
    padding: 2,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#507cef80',
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
