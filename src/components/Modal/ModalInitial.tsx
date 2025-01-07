interface ModalInitialProps {}

const ModalInitial: React.FC<ModalInitialProps> = ({}) => {
  return (
    <div>
      <p>
        Default modal content. You can pass custom content as children to
        replace this. your Modal should look like this
        <pre>
          <code>
            &lt;Modal&gt; <br /> &lt;SomeComponent/&gt; <br />
            &lt;/Modal&gt;
          </code>
        </pre>
        <ul>Optional Propertys</ul>
        <li>
          Modal Prevent Close from
          <ul>
            <small>
              by default the modal close buttons are set to FALSE - can be
              closet from anywhere of this 3 Propertys
            </small>
            <li>- bottom</li>
            <li>- top</li>
            <li>- outside</li>
          </ul>
        </li>
      </p>
    </div>
  );
};

export default ModalInitial;
