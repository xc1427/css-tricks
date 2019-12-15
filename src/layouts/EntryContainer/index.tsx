import React from 'react';
import { Menu } from 'antd';
import Link from 'umi/link';
import { MenuProps } from 'antd/lib/menu';
import { MenuItemProps } from 'antd/lib/menu/MenuItem';

type Props = MenuProps & {
  children: React.ReactElement<MenuItemProps> | React.ReactElement<MenuItemProps>[];
};

export const EntryContainer: React.FC<Props> = props => {
  const { children, ...restProps } = props;
  const children2 = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return (
        <Menu.Item key={child.key ?? ''}>
          <Link to={child.key ? String(child.key) : '/'}>
            {React.cloneElement(child, child.props, child.key)}
          </Link>
        </Menu.Item>
      );
    }
    return null;
  });
  return <Menu {...restProps}>{children2}</Menu>;
};
