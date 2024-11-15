import { NavLink } from 'react-router-dom';
import * as h from '../styles/StyledHeader.tsx';

import {useState} from "react";
import { Menu,MenuHandler,MenuList,MenuItem,Button } from "@material-tailwind/react";

const StoreHeader = ()=>{
    const [openMenu, setOpenMenu] = useState(false);
    return(
        <div>
            <h.Div class="navbar">
                <h.DivLogo>
                    <NavLink to="/shopMain"><h.Logo src="/logo.svg" /></NavLink>
                </h.DivLogo>

                <h.DivSide>
                    <h.NavLinkSide to="/changeStore">독산역점</h.NavLinkSide>
                    <h.VerticalLine/>
                    <h.NavLinkSide to="/logout">로그아웃</h.NavLinkSide>
                </h.DivSide>

                {/* <h.DivMenu>
                    <h.NavLinkMenu to="/shopMain">쇼핑몰</h.NavLinkMenu>
                    <h.NavLinkMenu to="/stockAdd">재고관리</h.NavLinkMenu>
                    <h.NavLinkMenu to="/orderList">주문관리</h.NavLinkMenu>
                    <h.NavLinkMenu to="/salesManagement">재무관리</h.NavLinkMenu>
                    <h.NavLinkMenu to="/noticeList">커뮤니티</h.NavLinkMenu>
                    <h.NavLinkMenu to="/myAlarmList">마이페이지</h.NavLinkMenu>
                </h.DivMenu> */}

                <h.DivMenu>
                <Menu placement="bottom-start" open={openMenu}
                    handler={setOpenMenu} allowHover offset={0}>
                    <MenuHandler className="items-center justify-between">
                        <h.DivMenuItem>
                            <h.DivMenuInside>
                                <h.NavLinkMenu to="/shopMain">쇼핑몰</h.NavLinkMenu>
                                <h.NavLinkMenu to="/stockOrderItemAdd">재고관리</h.NavLinkMenu>
                                <h.NavLinkMenu to="/orderList">주문관리</h.NavLinkMenu>
                                <h.NavLinkMenu to="/salesManagement">재무관리</h.NavLinkMenu>
                                <h.NavLinkMenu to="/noticeList">커뮤니티</h.NavLinkMenu>
                                <h.NavLinkMenu to="/myAlarmList">마이페이지</h.NavLinkMenu>
                            </h.DivMenuInside>
                        </h.DivMenuItem>
                    </MenuHandler>
                    <h.MenuListOut>
                        <h.MenuListDiv>
                            <MenuItem>Home</MenuItem>
                        </h.MenuListDiv>
                        <h.MenuListDiv>
                            <MenuItem><NavLink to="/stockOrderItemAdd">주문상품재고추가</NavLink></MenuItem>
                            <MenuItem><NavLink to="/stockManage">매장재고관리</NavLink></MenuItem>
                            <MenuItem><NavLink to="/stockOtherStore">타매장재고조회</NavLink></MenuItem>
                        </h.MenuListDiv>
                        <h.MenuListDiv>
                            <MenuItem>주문내역</MenuItem>
                            {/* <h.NavLinkMenu to="/orderList">주문내역</h.NavLinkMenu> */}
                        </h.MenuListDiv>
                        <h.MenuListDiv>
                            <MenuItem>매출입력</MenuItem>
                            <MenuItem>매출분석</MenuItem>
                            <MenuItem>지출내역</MenuItem>
                            {/* <h.NavLinkMenu to="/expenseList">지출내역</h.NavLinkMenu> */}
                        </h.MenuListDiv>
                        <h.MenuListDiv>
                            <MenuItem><NavLink to="/community/noticeList">공지사항</NavLink></MenuItem>
                            <MenuItem><NavLink to="/community/complainList">컴플레인 공지</NavLink></MenuItem>
                            <MenuItem><NavLink to="/community/askList">1:1 문의</NavLink></MenuItem>
                        </h.MenuListDiv>
                        <h.MenuListDiv>
                            <MenuItem>알림 모아보기</MenuItem>
                            <MenuItem>가맹점 정보</MenuItem>
                            <MenuItem>내 가맹점 관리</MenuItem>
                        </h.MenuListDiv>
                    </h.MenuListOut>
                </Menu>
                </h.DivMenu>
                
                <h.DivIcon>
                    <h.NavLinkIcon to="/alarm"><h.Icon src="/alarm.png" /></h.NavLinkIcon>
                    <h.NavLinkIcon to="/repairList"><h.Icon src="/repair.png" /></h.NavLinkIcon>
                    <h.NavLinkIcon to="/wishList"><h.Icon src="/wish.png" /></h.NavLinkIcon>
                    <h.NavLinkIcon to="/cartList"><h.Icon src="/cart.png" /></h.NavLinkIcon>
                </h.DivIcon>
            </h.Div>
        </div>
    )
}
export default StoreHeader;