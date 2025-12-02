import Button from "@/components/Button";
import { faHeart, faSpinner } from "@fortawesome/free-solid-svg-icons";

function AssetsIcon() {
  return (
    <>
      <Button icon={faHeart} outline size="larget" title="button">
        Click me
      </Button>
      <Button leftIcon={faHeart} outline size="larget" title="button">
        Click me
      </Button>
      <Button rightIcon={faHeart} outline size="larget" title="button">
        Click me
      </Button>
      <Button
        icon={faHeart}
        rightIcon={faHeart}
        outline
        size="larget"
        title="button"
      >
        Click me
      </Button>

      <Button
        icon={faSpinner}
        loading={true}
        outline
        disabled
        size="larget"
        title="button"
        onClick={() => alert("Click me")}
      >
        Click me
      </Button>
    </>
  );
}
export default AssetsIcon;
