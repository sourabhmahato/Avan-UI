import { useScrollToTop, useTitle } from "../../common";

export const Avatar = () => {
  useTitle("Avan-UI | Avatar");
  useScrollToTop();
  return (
    <div className="p-5 box-shadow border-1 h-100 w-100">
      <div className="heading-2">Avatar</div>
      <div className="seperator" />
      <div className="para-normal">
        An avatar is an icon or figure representing a person in a profile
        section or chat screens.
      </div>
      <div className="flex justify-center">
        <div className="preview flex space-around align-center w-6 m-v-5">
          <img
            src="https://pbs.twimg.com/profile_images/1412851389265444864/flHAomG9_400x400.jpg"
            alt="Avatar"
            className="avatar-small border-round"
          />
          <img
            src="https://media-exp3.licdn.com/dms/image/C5103AQFol8THY1HwrQ/profile-displayphoto-shrink_800_800/0/1567021956525?e=1631750400&v=beta&t=g1RtoEiqXEJJ-ryz_n--_c0zvIfYSotU1nVHKta7fuU"
            alt="Avatar"
            className="avatar-mid border-round"
          />
          <img
            src="https://media-exp3.licdn.com/dms/image/C5603AQFni-_wt7B8gw/profile-displayphoto-shrink_800_800/0/1607431127424?e=1631750400&v=beta&t=XmQ15bphAK7Dkk439vIgL5rPtnNfIyp1bR7IvTzsbqY"
            alt="Avatar"
            className="avatar-big border-round"
          />
        </div>
      </div>
      <div className="flex justify-center m-v-8">
        <embed
          src="https://carbon.now.sh/embed/hAYBLttV7js6mc9u9u6S"
          type=""
          className="w-100 h-8"
        />
      </div>
    </div>
  );
};
