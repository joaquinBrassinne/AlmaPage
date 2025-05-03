import React from 'react'
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTrigger } from '../ui/drawer'
import { Button } from '../ui/button'

interface Props {
    btnDesc: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    footer?: string;
}

const PopUp = ({ btnDesc, title, subtitle, children, footer }: Props) => {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button className='BotonInstalaciones'>{btnDesc}</Button>
            </DrawerTrigger>
            <DrawerContent className="popupContainer">
                <DrawerHeader className='Titulos'>
                    {title}
                </DrawerHeader>
                {subtitle &&
                    (
                        <DrawerDescription>
                            {subtitle}
                        </DrawerDescription>
                    )
                }
                {children}
                {footer && (
                    <DrawerFooter>
                        {footer}
                    </DrawerFooter>
                )}
            </DrawerContent>
        </Drawer>
    )
}

export default PopUp