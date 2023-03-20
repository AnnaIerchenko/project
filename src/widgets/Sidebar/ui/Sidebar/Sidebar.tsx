import { memo, useMemo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import { Button, ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import cls from './Sidebar.module.scss'
import { SidebarItemList } from "widgets/Sidebar/model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";
interface SidebarProps {
  className?: string;
 
}

export const Sidebar = memo(({className}: SidebarProps) => {

  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  const itemsList = useMemo(() => SidebarItemList.map((item) => (
    <SidebarItem
        item={item}
        collapsed={collapsed}
        key={item.path}
    />
)), [collapsed]);

  return (
    <div 
      data-testid="sidebar"
      className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      
      <Button 
        data-testid="sidebar-toggle" 
        onClick={onToggle}
        className={cls.collapsedBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.items}>
        {itemsList}
      </div>


      <div className={cls.switchers}>
        <ThemeSwitcher/>

        <LangSwitcher 
          short={collapsed} 
          className={cls.lang}
        />
      </div>
    </div>
  )
})