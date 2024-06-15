import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";

// 알림 저장 함수
const storeNotification = async (notification) => {
  try {
    let notifications = await AsyncStorage.getItem("notifications");
    notifications = notifications ? JSON.parse(notifications) : [];

    // 새 알림 추가
    notifications.push(notification);

    // AsyncStorage에 저장
    await AsyncStorage.setItem("notifications", JSON.stringify(notifications));
  } catch (error) {
    console.error("Error storing notification:", error);
  }
};

// 알림 삭제 함수
export const deleteNotification = async (notificationId) => {
  try {
    let storedNotifications = await AsyncStorage.getItem("notifications");
    storedNotifications = storedNotifications
      ? JSON.parse(storedNotifications)
      : [];

    console.log("Stored notifications:", storedNotifications);

    // AsyncStorage에 업데이트된 알림 리스트 저장
    await AsyncStorage.setItem(
      "notifications",
      JSON.stringify(storedNotifications)
    );

    // Expo의 cancelScheduledNotificationAsync 함수를 사용하여 예약된 알림 취소
    const notificationToRemove = storedNotifications.find(
      (notif) => notif.id === notificationId
    );

    console.log("debugging!!!!!!!!!!!", notificationToRemove);
    // 선택된 알림 삭제
    const updatedNotifications = storedNotifications.filter(
      (notif) => notif.id !== notificationId
    );

    // 삭제된 알림 리스트를 다시 AsyncStorage에 저장
    await AsyncStorage.setItem(
      "notifications",
      JSON.stringify(updatedNotifications)
    );

    console.log("Notifications after deletion:", updatedNotifications);
  } catch (error) {
    console.error("Error removing notification:", error);
  }
};

//권한 요청 함수
export const requestNotificationPermission = async () => {
  //   console.log("권한 요청 함수 호출");
  const { status } = await Notifications.requestPermissionsAsync();
  //   console.log("현재 권한 상태 : ", status);
  return status === "granted";
};

// 예약된 알림 함수
export const scheduleNotification = async (movieId, releaseDate, title) => {
  console.log(
    "Scheduling notification for movieId:",
    movieId,
    "title:",
    title,
    "releaseDate:",
    releaseDate
  );

  try {
    // 입력받은 날짜를 기반으로 Date 객체 생성
    const releaseDateTime = new Date(releaseDate);
    // 하루 전으로 날짜 계산
    const notificationDateTime = new Date(releaseDateTime);
    notificationDateTime.setDate(releaseDateTime.getDate() - 1);
    notificationDateTime.setHours(9);
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "영화 개봉일 알림",
        body: title,
        releaseDate: releaseDate,
        id: movieId.toString(),
        // data: { movieId }, // 필요한 경우 추가 데이터
      },
      //   trigger: notificationDateTime,
      trigger: notificationDateTime,
    });
    // 저장할 알림 객체
    const notification = {
      id: movieId, // 예약된 알림의 고유 ID로 movieId를 사용
      title: "영화 개봉일 알림",
      body: title,
      releaseDate: releaseDate,
    };

    console.log("알림이 성공적으로 예약되었습니다!");
    // AsyncStorage에 알림 저장
    await storeNotification(notification);
  } catch (error) {
    console.log("알림 예약 중 오류가 발생했습니다:", error.message);
  }
};

// 저장된 알림 리스트 불러오기
export const getStoredNotifications = async () => {
  try {
    const storedNotifications = await AsyncStorage.getItem("notifications");
    return storedNotifications ? JSON.parse(storedNotifications) : [];
  } catch (error) {
    console.error("Error loading notifications:", error);
    return [];
  }
};
