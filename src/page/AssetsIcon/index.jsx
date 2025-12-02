import Button from "@/components/Button";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faHeart,
  faLink,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AssetsIcon() {
  let loading = true;
  return (
    <div>
      <h1>Icon</h1>

      <Button outline>
        {/* FontAwesomeIcon sử dụng fill là currentColor nên có thể  thay đổi mày của nó bằng các đặt class hoặc dùng 1 thẻ cha bao bọc là có thể ăn theo màu */}
        {/* kích thức của icon được dùng bằng em lên nó sẽ ăn theo fontsize của thẻ cha tách động lên thẻ con */}
        <FontAwesomeIcon
          spin={loading}
          icon={loading ? faSpinner : faYoutube}
        />
        Click me
      </Button>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <FontAwesomeIcon
        icon={faHeart}
        beat
        style={{ "--fa-animation-duration": "0.4s" }}
      />
      <FontAwesomeIcon
        icon={faSpinner}
        spin
        style={{ "--fa-animation-duration": "1s" }}
      />
      <Button icon={faLink} outline>
        Button 1
      </Button>
      <Button leftIcon={faHeart} outline>
        Button 2
      </Button>
      <Button rightIcon={faHeart} outline>
        Button 2
      </Button>
      <Button icon={faHeart} rightIcon={faHeart} outline>
        Button 2
      </Button>

      <Button
        loading
        icon={faSpinner}
        outline
        onClick={() => alert("Click")}
      ></Button>
    </div>
  );
}

export default AssetsIcon;
