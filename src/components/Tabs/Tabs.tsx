import { ReactNode } from "react";
import "./_tabs.scss";

export type TabTypes = {
  component?: ReactNode | null;
  tabName?: string;
  disable?: boolean;
  text?: string;
  active?: boolean;
};

export interface TabsProps {
  tabData: {
    children?: ReactNode;
    tabID?: string;
    tabTitle?: string;
    items?: TabTypes[];
  };
}

const Tabs: React.FC<TabsProps> = ({ tabData }) => {
  return (
    <div className="tabs uk-modal-body ">
      <h3 className="uk-margin-top">{tabData?.tabTitle}</h3>
      <ul
        className="uk-tab tabs__list "
        data-uk-tab={`"{connect:'#${tabData?.tabID}'}"`}
      >
        {tabData?.items?.map((tabs, i) => (
          <li key={i} className={`${tabs.active && "uk-active"}`}>
            <a className={`tabs__title  ${tabs.disable && "uk-disabled"} `}>
              {tabs?.tabName}
            </a>
          </li>
        ))}
      </ul>

      <ul id={tabData.tabID} className="uk-switcher uk-margin-medium">
        {tabData?.items?.map((tabsContent, i) => (
          <li key={i}>
            <a href="#" id="autoplayer" data-uk-switcher-item="next"></a>
            {tabsContent?.component && tabsContent?.component}
            {tabsContent?.text && tabsContent?.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
